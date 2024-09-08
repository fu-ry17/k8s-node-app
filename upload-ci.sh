
echo "Enter the commit message"
read message

git add .
git commit -m "$message"
git branch -M main
git remote add origin git@github.com:fu-ry17/k8s-node-app.git
git push -u origin main
