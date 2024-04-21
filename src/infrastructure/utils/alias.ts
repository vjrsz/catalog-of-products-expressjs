import ModuleAlias from 'module-alias';
import config from "./../../config/config";

ModuleAlias.addAliases({
    '@': config.srcDirname,
    '@controllers': config.srcDirname + "/controllers",
    '@infrastructure': config.srcDirname + "/infrastructure",
});