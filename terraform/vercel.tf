data "vercel_project" "lundi" {
  name = "lundi"
}

# data "vercel_project_directory" "lundi" {
#   path = "../apps/lundi-bleu"
# }

# resource "vercel_deployment" "lundi" {
#   project_id  = data.vercel_project.lundi.id
#   files       = data.vercel_project_directory.lundi.files
#   path_prefix = data.vercel_project_directory.lundi.path
#   production  = true
# }
