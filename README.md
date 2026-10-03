# HarborOS Documentation

Read the user guides at **https://docs.harboros.ai/docs/**.

- [Getting started](https://docs.harboros.ai/docs/getting-started/)
- [Downloads and support](https://docs.harboros.ai/docs/downloads-support/)
- [Application guides](https://docs.harboros.ai/docs/application-guides/)
- [Configuration help](https://docs.harboros.ai/docs/configuration-help/)
- [Reporting bugs](https://docs.harboros.ai/docs/reporting-bugs/)

If the website is unavailable, read the same guides directly in this repository:

- [Documentation overview](content/docs/index.mdx)
- [Getting started](content/docs/getting-started.mdx)
- [Downloads and support](content/docs/downloads-support.mdx)
- [Application guides](content/docs/application-guides.mdx)
- [Configuration help](content/docs/configuration-help.mdx)
- [Reporting bugs](content/docs/reporting-bugs.mdx)

The guides link to the existing [official Download Center](https://harboros.ai/pages/download-center), including the hardware manual, system image, firmware, and utilities, and to the [official application tutorials](https://harboros.ai/blogs/guidance). Detailed storage and networking documentation is being expanded.

## Questions and feedback

Ask configuration questions in [Community Q&A](https://github.com/HarborNAS/community/discussions/categories/q-a) or [open a question](https://github.com/HarborNAS/community/issues/new?template=question.yml). [Report HarborOS bugs](https://github.com/HarborNAS/community/issues/new?template=bug_report.yml) in the community repository. English and Chinese are welcome.

For documentation corrections, open an issue or pull request in this repository.

## Contributing and local development

This website uses Next.js and Fumadocs. Documentation lives in `content/docs`; navigation order is defined in `content/docs/meta.json`.

Use Node.js 22 and pnpm 10, matching the deployment workflow:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000/docs. Before submitting changes, run:

```sh
pnpm exec tsc --noEmit
pnpm build
```

## Deployment

Pushes to `main` build a static export and deploy `out` to GitHub Pages through `.github/workflows/deploy.yml`. The configured custom domain is `docs.harboros.ai`. Both `/` and `/docs/` are public entry points; search is exported as static data and does not require a running application server.

## 中文说明

用户文档入口：https://docs.harboros.ai/docs/ 。网站暂时不可用时，可以直接阅读上面的仓库文档链接。配置求助及系统 Bug 请提交到 [HarborNAS/community](https://github.com/HarborNAS/community)；文档纠错可在本仓库提交 Issue 或 PR。
