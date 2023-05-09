import { BaseCommand } from "@adonisjs/ace";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * A command to display quick links to doc pages
 */
export default class Docs extends BaseCommand {
  public static commandName = "docs";
  public static description = "Display quick links to documentation";

  public static settings = {
    loadApp: false,
    stayAlive: false,
  };

  public async run() {
    const filePath = join(__dirname, "../data.json");

    const docs: {
      name: string;
      docs: { title: string; permalink: string }[];
    }[] = JSON.parse(readFileSync(filePath, "utf-8"));

    const menu = await this.prompt.choice(
      "Select menu",
      docs.map(d => d.name)
    );

    const pages = docs.find(i => i.name === menu)!.docs;

    const page = await this.prompt.choice(
      "Select page",
      pages.map(d => d.title)
    );

    const url = pages.find(i => i.title === page)!.permalink;
    this.logger.info(`https://docs.adonisjs.com/guides/${url}`);
  }
}
