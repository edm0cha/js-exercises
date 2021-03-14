resource "aws_api_gateway_rest_api" "this" {
  name        = local.name
  description = "JS Exercises API Gateway"
  tags        = local.tags
}
