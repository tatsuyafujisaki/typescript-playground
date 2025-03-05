1. Create `following.html` on Desktop.
   ```shell
   pbpaste > ~/Desktop/following.html
   ```
1. Create `followers.html` on Desktop.
   ```shell
   pbpaste > ~/Desktop/followers.html
   ```
1. Run the following command in Terminal.
   ```shell
   # Convert `following.html` into `following.txt` on Desktop.
   cd ~/Documents/GitHub/deno-playground/src/example/duo
   deno run --allow-env --allow-net --allow-read --allow-write convert.ts following.html following.txt

   # Convert `followers.html` into `followers.txt` on Desktop.
   deno run --allow-env --allow-net --allow-read --allow-write convert.ts followers.html followers.txt

   # Compare the content of `following.txt` and `followers.txt` on Desktop.
   diff ~/Desktop/following.txt ~/Desktop/followers.txt

   # Clean up.
   cd ~/Desktop
   rm followers.html followers.txt following.html following.txt
   ```
