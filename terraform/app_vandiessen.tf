module "vandiessen" {
  source                 = "./modules/vercel_app"
  name                   = "vandiessen"
  root_directory         = "apps/vandiessen"
  production             = var.TFC_CONFIGURATION_VERSION_GIT_TAG != ""
  project_directory_path = local.repo_root
  build_command          = "turbo build"
  install_command        = "cd ../.. && pnpm i --frozen-lockfile"
  framework              = "nextjs"
  output_directory       = null

  environment_variables = concat(local.shared_environment_variables, [
    {
      key       = "NEXT_PUBLIC_SITE_NAME"
      value     = "vandiessen"
      target    = local.env_targets
      sensitive = false
    },
  ])
}
