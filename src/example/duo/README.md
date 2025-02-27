1. Create `following.html` on Desktop.
   ```shell
   pbpaste > ~/Desktop/following.html
   ```
1. Create `followers.html` on Desktop.
   ```shell
   pbpaste > ~/Desktop/followers.html
   ```
1. Convert `following.html` into `following.txt` on Desktop.
   ```shell
   cd ~/Documents/GitHub/deno-playground/src/example/duo
   deno run --allow-env --allow-net --allow-read --allow-write convert.ts following.html following.txt
   ```
1. Convert `followers.html` into `followers.txt` on Desktop.
   ```shell
   deno run --allow-env --allow-net --allow-read --allow-write convert.ts followers.html followers.txt
   ```
1. Compare the content of `following.txt` and `followers.txt` on Desktop.
   ```shell
   diff ~/Desktop/following.txt ~/Desktop/followers.txt
   ```
1. Clean up
   ```shell
   cd ~/Desktop
   rm followers.html followers.txt following.html following.txt
   ```
