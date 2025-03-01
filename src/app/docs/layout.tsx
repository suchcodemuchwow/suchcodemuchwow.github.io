import * as constants from "@/lib/constants";
import { source } from "@/lib/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions, pageTreeOptions } from "../layout.config";

const docsOptions: DocsLayoutProps = {
	...baseOptions,
	tree: source.pageTree,
	githubUrl: constants.GITHUB_URL,
};

export default function Layout({ children }: { children: ReactNode }) {
	const { links, ...rest } = docsOptions;
	
	return (
		<DocsLayout {...rest} githubUrl={constants.GITHUB_URL}>
			{children}
		</DocsLayout>
	);
}
