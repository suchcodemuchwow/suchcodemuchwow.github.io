import * as constants from "@/lib/constants";
import type { Option } from "fumadocs-ui/components/layout/root-toggle";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const pageTreeOptions: Option[] = [
	{
		title: "Algorithms",
		description: "Data Structures and Algorithms",
		url: "/docs/algorithms",
	},
	{
		title: "System Design",
		description:
			"Scalability, Availability, Reliability, Performance, and Resilience",
		url: "/docs/system-design",
	},
	{
		title: "Behavioral",
		description: "Behavioral questions",
		url: "/docs/behavioral",
	},
];

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	githubUrl: constants.GITHUB_URL,
	nav: {
		title: (
			<span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
				{constants.WEBSITE_NAME}
			</span>
		),
		transparentMode: "top",
	},
	links: [
		{
			text: "Algorithms",
			url: "/docs/algorithms",
			active: "none",
		},
		{
			text: "System Design",
			url: "/docs/system-design",
			active: "url",
		},
		{
			text: "Behavioral",
			url: "/docs/behavioral",
			active: "nested-url",
		},
	],
};
