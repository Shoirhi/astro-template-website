import { z } from "zod"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { render } from "@react-email/render";
import { LuAlertCircle, LuMailCheck } from "react-icons/lu";
import { Turnstile } from '@marsidev/react-turnstile'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "@/components/Link";

import { NotifyEmailTemplate } from "./NotifyEmailTemplate"
import { ReplyEmailTemplate } from "./ReplyEmailTemplate"

import { CONTACT_CONFIG } from "../config";

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(1, {
      message: "名前を入力してください。",
    })
    .max(60, {
      message: "最大60文字までです。",
    }),
  email: z.string()
    .trim()
    .min(1, {
      message: "メールアドレスを入力してください。",
    })
    .email({
      message: "メールアドレスの形式で入力してください。",
    })
    .max(254, {
      message: "最大254文字までです。",
    }),
  content: z.string().trim().min(1, {
    message: "お問い合わせ内容を入力してください。",
  }),
  confirm: z.boolean().default(false),
})

export default () => {

  const [sending, setSending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [token, setToken] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
      confirm: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {

    setSuccess(false);
    setError(false);
    setToken("");
    setSending(true);
    setTimeout(() => { }, 1000);

    if (!token || token === undefined) {
      setSending(false);
      setError(true)
      return
    }

    const verify = await fetch("/api/tokenVerify.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token
      }),
    })

    if (verify.status !== 200) {
      setSending(false);
      setError(true)
      return
    }

    const notifyRes = await fetch("/api/sendNotifyEmail.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: await render(<NotifyEmailTemplate name={values.name} email={values.email} content={values.content} />, {
          pretty: true,
        }),
        text: await render(<NotifyEmailTemplate name={values.name} email={values.email} content={values.content} />, {
          plainText: true,
        }),
      }),
    });

    if (!notifyRes.ok) {
      setSending(false);
      setError(true)
      return
    }

    const replyRes = await fetch("/api/sendReplyEmail.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: await render(<ReplyEmailTemplate name={values.name} content={values.content} />, {
          pretty: true,
        }),
        text: await render(<ReplyEmailTemplate name={values.name} content={values.content} />, {
          plainText: true,
        }),
        email: values.email
      }),
    });

    setSending(false);

    if (replyRes.ok) {
      setSuccess(true);
    } else {
      setError(true)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お名前<Required /></FormLabel>
              <FormControl>
                <Input placeholder="お名前を入力" type="text" autoComplete="name" {...field} />
              </FormControl>
              <FormDescription>
                例）山田 太郎
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス<Required /></FormLabel>
              <FormControl>
                <Input placeholder="メールアドレスを入力" type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormDescription>
                例）contact@example.com
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お問い合せ内容<Required /></FormLabel>
              <FormControl>
                <Textarea placeholder="お問い合わせ内容を入力" rows={6} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  required
                />
              </FormControl>
              <FormLabel>
                <Link href="/privacy-policy" external>プライバシーポリシー</Link>に同意します
              </FormLabel>
            </FormItem>
          )}
        />
        <Turnstile siteKey={CONTACT_CONFIG.turnstileSiteKey} options={{
          theme: "light",
        }} onSuccess={setToken} />
        {success &&
          <Alert className="mt-12">
            <LuMailCheck className="h-4 w-4" />
            <AlertTitle>お問い合わせありがとうございました</AlertTitle>
            <AlertDescription>
              ご入力いただいた内容を確認後、返信致します。
            </AlertDescription>
          </Alert>
        }
        {error &&
          <Alert className="mt-12" variant="destructive">
            <LuAlertCircle className="h-4 w-4" />
            <AlertTitle>エラーが発生しました。</AlertTitle>
            <AlertDescription>
              大変申し訳ありませんが、時間をおいてから再度お問い合わせください。
            </AlertDescription>
          </Alert>
        }
        {sending ? <Button disabled>送信中です</Button> : <Button type="submit">送信する</Button>}
      </form>
    </Form>
  )
}

export function Required() {
  return (
    <span className="bg-destructive text-destructive-foreground text-sm py-0.5 px-2 rounded-sm ml-3">必須</span>
  )
}