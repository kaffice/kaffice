// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	outDir: 'docs',
    build: {
        format: 'file',
    },
	integrations: [
		starlight({
			title: 'Kaffice',
			social: {
				github: 'https://github.com/kaffice',
			},
			
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '资源汇总', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
