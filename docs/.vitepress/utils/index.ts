import { readdirSync } from "fs";

type Config = {
  basePath: string;
  baseLink: string;
  titleMap: {
    [key: string]: string;
  };
};
/**
 * 根据目录生成侧边栏配置
 */
export function genSidebarConfig(conf: Config) {
  const { baseLink, basePath, titleMap } = conf;
  const dirList = readdirSync(basePath).filter((name) => !name.includes(".ts"));

  const res = dirList.map((dirName) => {
    if (dirName.endsWith(".md")) {
      return {
        text: titleMap[dirName] || dirName,
        link: `${basePath}/${dirName.replace(".md", "")}`,
      };
    }
    const config = {
      basePath: `${basePath}/${dirName}`,
      baseLink: `${baseLink}/${dirName}`,
      titleMap,
    };
    const itemsConfig = genSidebarConfig(config);

    return {
      text: titleMap[dirName] || dirName,
      link: config.baseLink,
      items: itemsConfig,
      collapsed: true,
    };
  });

  // 用于更改父级的link路径，如果当前目录下有 index.md 文件，则将 baseLink 设置为目录名，否则设置为第一个子目录
  if (dirList.includes("index.md")) {
    conf.baseLink += "/";
  } else {
    conf.baseLink += "/" + dirList[0].replace(".md", "");
  }

  return res;
}
