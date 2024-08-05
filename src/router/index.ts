// @unocss-include
import { createBrowserRouter } from "react-router-dom";

import Preference from "@/layouts/Preference";
import About from "@/pages/About";
import ClipboardHistory from "@/pages/Clipboard/History";
import ClipboardSettings from "@/pages/Clipboard/Settings";
import DataBackup from "@/pages/DataBackup";
import History from "@/pages/History";
import Settings from "@/pages/Settings";
import Shortcut from "@/pages/Shortcut";
import type { Route } from "@/types/router";

export const preferenceRoute: Route = {
	path: "/preference",
	Component: Preference,
	children: [
		{
			path: "clipboard",
			Component: ClipboardSettings,
			meta: {
				title: "preference.menu.title.clipboard",
				icon: "i-lucide:clipboard-list",
			},
		},
		{
			path: "history",
			Component: History,
			meta: {
				title: "preference.menu.title.history",
				icon: "i-lucide:history",
			},
		},
		{
			path: "general",
			Component: Settings,
			meta: {
				title: "preference.menu.title.general",
				icon: "i-lucide:bolt",
			},
		},
		{
			path: "shortcut",
			Component: Shortcut,
			meta: {
				title: "preference.menu.title.shortcut",
				icon: "i-lucide:keyboard",
			},
		},
		{
			path: "data-backup",
			Component: DataBackup,
			meta: {
				title: "preference.menu.title.data_backup",
				icon: "i-lucide:database-backup",
			},
		},
		{
			path: "about",
			Component: About,
			meta: {
				title: "preference.menu.title.about",
				icon: "i-lucide:info",
			},
		},
	],
};

export const routes: Route[] = [
	preferenceRoute,
	{
		path: "/",
		Component: ClipboardHistory,
		meta: {
			windowOptions: {
				width: 360,
				height: 600,
				resizable: false,
				maximizable: false,
				decorations: false,
				visible: false,
				transparent: true,
				alwaysOnTop: true,
				acceptFirstMouse: true,
			},
		},
	},
];

export const router = createBrowserRouter(routes);
