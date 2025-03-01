import { source } from "@/lib/source";
import defaultMdxComponents from "fumadocs-ui/mdx";
import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export default async function Page(props: {
	params: Promise<{ slug: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);

	if (!page) notFound();

	const path = `apps/docs/content/docs/${page.file.path}`;
	const preview = page.data.preview;
	const { body: Mdx, toc, lastModified } = await page.data.load();

	return (
		<DocsPage
			toc={toc}
			full={page.data.full}
			lastUpdate={lastModified}
			tableOfContent={{
				style: "clerk",
				single: false,
			}}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<Mdx components={{ ...defaultMdxComponents }} />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description,
	};
}
