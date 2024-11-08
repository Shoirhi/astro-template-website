import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Hr,
  Preview,
  Text,
} from "@react-email/components";

import { SITE } from "@/config";

export function NotifyEmailTemplate({
  name,
  email,
  content,
}: {
  name: string;
  email: string;
  content: string;
}) {
  return (

    <Html lang="ja">
      <Head />
      <Preview>ウェブサイトのお問い合わせフォームに新しいメッセージが届きました。</Preview>
      <Body>
        <Container>
          <Heading>【重要】新しいお問い合わせがありました - 内容確認のお願い</Heading>

          <Text>
            ウェブサイトのお問い合わせフォームに新しいメッセージが届きました。内容をご確認の上、適切な対応をお願いいたします。
          </Text>

          <Hr />

          <Text><strong>お名前：</strong>{name}</Text>
          <Text><strong>メールアドレス：</strong>{email}</Text>
          <Text><strong>お問い合わせ内容：</strong></Text>
          <Text>{content}</Text>

          <Hr />

          <Text>よろしくお願いいたします。</Text>
          <Text>{SITE.siteName}</Text>
          <Text>{SITE.website}</Text>
        </Container>
      </Body>
    </Html>
  )
}
