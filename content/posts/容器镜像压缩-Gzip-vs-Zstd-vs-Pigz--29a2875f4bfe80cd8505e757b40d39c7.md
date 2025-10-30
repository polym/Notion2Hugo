---
title: "容器镜像压缩 Gzip vs Zstd vs Pigz "
date: "2025-10-28T09:31:00.000Z"
lastmod: "2025-10-29T06:15:00.000Z"
draft: true
series: []
authors:
  - "Hongbo Mo"
tags: []
categories: []
NOTION_METADATA:
  object: "page"
  id: "29a2875f-4bfe-80cd-8505-e757b40d39c7"
  created_time: "2025-10-28T09:31:00.000Z"
  last_edited_time: "2025-10-29T06:15:00.000Z"
  created_by:
    object: "user"
    id: "1b106df3-cc7b-493e-9afa-a6a7c977ec1b"
  last_edited_by:
    object: "user"
    id: "1b106df3-cc7b-493e-9afa-a6a7c977ec1b"
  cover: null
  icon: null
  parent:
    type: "database_id"
    database_id: "2742875f-4bfe-8102-8a94-f918ade28f0e"
  archived: false
  in_trash: false
  is_locked: false
  properties:
    series:
      id: "B%3C%3FS"
      type: "multi_select"
      multi_select: []
    draft:
      id: "JiWU"
      type: "checkbox"
      checkbox: true
    authors:
      id: "bK%3B%5B"
      type: "people"
      people:
        - object: "user"
          id: "1b106df3-cc7b-493e-9afa-a6a7c977ec1b"
          name: "Hongbo Mo"
          avatar_url: "https://lh3.googleusercontent.com/-TqDAswHjpLU/AAAAAAAAAAI/AAAAAAA\
            ACcE/ytljzmTe0FE/photo.jpg"
          type: "person"
          person:
            email: "zjutpolym@gmail.com"
    custom-front-matter:
      id: "c~kA"
      type: "rich_text"
      rich_text: []
    tags:
      id: "jw%7CC"
      type: "multi_select"
      multi_select: []
    categories:
      id: "nbY%3F"
      type: "multi_select"
      multi_select: []
    Last edited time:
      id: "vbGE"
      type: "last_edited_time"
      last_edited_time: "2025-10-29T06:15:00.000Z"
    summary:
      id: "x%3AlD"
      type: "rich_text"
      rich_text: []
    Name:
      id: "title"
      type: "title"
      title:
        - type: "text"
          text:
            content: "容器镜像压缩 Gzip vs Zstd vs Pigz "
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "容器镜像压缩 Gzip vs Zstd vs Pigz "
          href: null
  url: "https://www.notion.so/Gzip-vs-Zstd-vs-Pigz-29a2875f4bfe80cd8505e757b40d39c7"
  public_url: "https://polym.notion.site/Gzip-vs-Zstd-vs-Pigz-29a2875f4bfe80cd850\
    5e757b40d39c7"
MANAGED_BY_NOTION_HUGO: true

---


## 背景


众所周知，


> [https://docs.docker.com/build/exporters/image-registry/](https://docs.docker.com/build/exporters/image-registry/)


uncompressed


62.55GiB


time docker pull [ngb1h.dc.huixingyun.com/huixingyun/comfyui@sha256:ada3be1b43a5cbee034e4c1c22f92162a4110d85734543728c0087f6f39e3c02](http://ngb1h.dc.huixingyun.com/huixingyun/comfyui@sha256:ada3be1b43a5cbee034e4c1c22f92162a4110d85734543728c0087f6f39e3c02)


![](https://aha.qingy.ing/api?block_id=2952875f-4bfe-802b-9758-e3715d16533f)


real    8m20.121s
user    0m0.645s
sys     0m0.494s


gzip


34.43GiB


time docker pull [ngb1h.dc.huixingyun.com/huixingyun/comfyui@sha256:15bdc7348ef74a91e32486f721943691fd4a7a1d257ecd44c1a888fc12fd79b8](http://ngb1h.dc.huixingyun.com/huixingyun/comfyui@sha256:15bdc7348ef74a91e32486f721943691fd4a7a1d257ecd44c1a888fc12fd79b8)


![](https://aha.qingy.ing/api?block_id=2952875f-4bfe-80df-8add-f8c1fa4aa061)


real    15m38.304s
user    0m0.611s
sys     0m0.569s


pigz


real    7m50.097s
user    0m0.468s
sys     0m0.310s


zstd


29.70GiB


time docker pull [ngb1h.dc.huixingyun.com/huixingyun/comfyui@sha256:468a5e990ca263ce3012f33ef740b2957f3e98dfe67416c3ae023eb24f857c5b](http://ngb1h.dc.huixingyun.com/huixingyun/comfyui@sha256:468a5e990ca263ce3012f33ef740b2957f3e98dfe67416c3ae023eb24f857c5b)


![](https://aha.qingy.ing/api?block_id=2952875f-4bfe-80b2-b967-d50ab04b9206)


real    5m27.149s
user    0m0.332s
sys     0m0.312s


zstd > uncompressed > gzip

1. 为什么 zstd 比 uncompressed？

	uncompressed 的大小是 zstd 的两倍，意味着巨大的 I/O 读取量。zstd 飞速的解压可以保证读取、解包、写入 磁盘高度并行化。

1. 为什么 gzip 最慢？

	gzip 解压是单核处理的效率比较低。

