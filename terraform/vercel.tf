data "vercel_project" "lundi_bleu" {
  name = "lundi-bleu"
}

# data "vercel_project_directory" "lundi_bleu" {
#   path = "../apps/lundi-bleu"
# }

# resource "vercel_deployment" "lundi_bleu" {
#   project_id  = data.vercel_project.lundi_bleu.id
#   files       = data.vercel_project_directory.lundi_bleu.files
#   path_prefix = data.vercel_project_directory.lundi_bleu.path
#   production  = true
# }
