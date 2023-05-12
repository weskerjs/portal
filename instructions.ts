import * as sinkStatic from "@adonisjs/sink";
import { ApplicationContract } from "@ioc:Adonis/Core/Application";
import { join } from "path";

function getStub(...paths: string[]) {
    return join(__dirname, 'templates/migrations', ...paths)
  }

function makeUserMigration(projectRoot: string, app: ApplicationContract, sink: typeof sinkStatic) {
  const migrationsDirectory = app.directoriesMap.get("migrations") || "database";
  const migrationPath = join(migrationsDirectory, `${Date.now()}_users.ts`);

  const template = new sink.files.MustacheFile(projectRoot, migrationPath, getStub("users.txt"));
  if (template.exists()) {
    sink.logger.action("create").skipped(`${migrationPath} file already exists`);
    return;
  }

  template.commit();
  sink.logger.action("create").succeeded(migrationPath);
}

function makeTokenMigration(projectRoot: string, app: ApplicationContract, sink: typeof sinkStatic) {
    const migrationsDirectory = app.directoriesMap.get("migrations") || "database";
    const migrationPath = join(migrationsDirectory, `${Date.now()}_tokens.ts`);
  
    const template = new sink.files.MustacheFile(projectRoot, migrationPath, getStub("tokens.txt"));
    if (template.exists()) {
      sink.logger.action("create").skipped(`${migrationPath} file already exists`);
      return;
    }
  
    template.commit();
    sink.logger.action("create").succeeded(migrationPath);
  }

export default async function instructions(projectRoot: string, app: ApplicationContract, sink: typeof sinkStatic) {
  makeUserMigration(projectRoot, app, sink);
  makeTokenMigration(projectRoot, app, sink);
}
