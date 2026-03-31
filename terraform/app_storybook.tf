module "storybook" {
  source                 = "./modules/vercel_app"
  name                   = "storybook"
  framework              = null
  build_command          = "cd ../.. && turbo --filter @mono/storybook... build"
  output_directory       = "storybook-static"
  root_directory         = "apps/storybook"
  production             = var.TFC_CONFIGURATION_VERSION_GIT_TAG != ""
  project_directory_path = local.repo_root
  install_command        = "cd ../.. && pnpm i --frozen-lockfile"
  environment_variables  = []
}

