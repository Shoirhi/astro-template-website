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

export function ReplyEmailTemplate({
  name,
  content,
}: {
  name: string;
  content: string;
}) {
  return (

    <Html lang="ja">
      <Head />
      <Preview>お問い合わせありがとうございます</Preview>
      <Body>
        <Container>
          <Heading>お問い合わせありがとうございます</Heading>

          <Text>{name} 様</Text>

          <Text>
            この度は、{SITE.siteName}にお問い合わせいただき、誠にありがとうございます。
          </Text>

          <Text>
            いただいた内容を確認の上、2-3営業日以内に担当者よりご返信いたします。今後の対応についてご不明な点やお急ぎの場合は、お気軽にサポートまでご連絡ください。
          </Text>

          <Hr />

          <Text><strong>お問い合わせ内容：</strong></Text>
          <Text className="whitespace-pre-wrap">{content}</Text>

          <Hr />

          <Text>今後とも{SITE.siteName}をよろしくお願い申し上げます。</Text>
          <Text>{SITE.siteName}</Text>
          <Text>{SITE.website}</Text>
        </Container>
      </Body>
    </Html>
  )
}
