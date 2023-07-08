# infra-charts
manage tons of applications with helm charts

## kubectl
cat src/utils/postgres/secrets.yaml | kubeseal --controller-namespace kube-system --controller-name sealed-secrets-controller --format yaml > sealed-secret.yaml