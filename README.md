# Posts Frontend Project

This is View layer for an Elixir Posts app. API Repository link - [elixir_posts](https://github.com/illiarerun/elixir_posts).

## Stack:
- Typescript, React.js
- Bundler: Vite
- Styling: AntDesign
- Routing: React Router
- API: Axios and React Query

## Local development guide:
- Clone repository using any tool you'd like, for example, with CLI: `git clone git@github.com:illiarerun/posts_frontend.git`
- Navigate to project directory `cd posts_frontend`
- Make sure that your elixir_posts api is running on `localhost:4000` or create `.env` file in the root with `VITE_API_URL` variable which will store your elixir_posts api URI:
```example
VITE_API_URL=http://localhost:4000/api
```
  
### NPM option:
- Exec `npm run dev`
- Visit `localhost:8080` in your browser

### Docker option:
- Exec `docker build . -t <your_desired_tag_name>`
- Exec `docker run -p 8080:8080 <your_tag_name_used_in_prev_cmd>`
- Visit `localhost:8080` in your browser

  
