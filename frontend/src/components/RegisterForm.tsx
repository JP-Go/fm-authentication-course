import { Component, createSignal, JSX } from "solid-js";
import { useNavigate } from "@solidjs/router";

export const RegisterForm: Component = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [name, setName] = createSignal("");

  const onSubmit: JSX.EventHandlerUnion<
    HTMLFormElement,
    Event & { submitter: HTMLElement }
  > = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3333/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: name(),
        email: email(),
        password: password(),
      }),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  };

  return (
    <div class="w-screen h-screen flex flex-col items-center justify-center bg-base-100">
      <form
        onSubmit={onSubmit}
        class="flex flex-col gap-4 max-w-3/5 items-center justify-center p-8 rounded-lg bg-neutral"
      >
        <h1 class="text-2xl font-bold text-center mx-auto w-fit">
          Registre-se
        </h1>
        <div class="form-control">
          <label class="label" for="name">
            <span class="label-text">Seu nome</span>
          </label>
          <label class="input-group">
            <span>E-mail</span>
            <input
              value={name()}
              onchange={(e) => setName(e.currentTarget.value)}
              id="name"
              type="text"
              placeholder="Seu nome"
              class="input input-bordered"
              autocomplete="name"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label" for="register_email">
            <span class="label-text">Seu e-mail</span>
          </label>
          <label class="input-group">
            <span>E-mail</span>
            <input
              value={email()}
              onchange={(e) => setEmail(e.currentTarget.value)}
              id="register_email"
              type="text"
              placeholder="seuemail@mail.com"
              class="input input-bordered"
              autocomplete="username"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label" for="new-password">
            <span class="label-text">Sua senha</span>
          </label>
          <label class="input-group">
            <span>Senha</span>
            <input
              value={password()}
              onchange={(e) => setPassword(e.currentTarget.value)}
              id="new-password"
              type="password"
              placeholder="**********"
              class="input input-bordered"
              autocomplete="new-password"
            />
          </label>
        </div>
        <div class="form-control flex flex-col gap-2 items-center mt-8">
          <button class="btn btn-primary btn-wide">Cadastrar</button>
          <p>Ou</p>
          <button
            type="button"
            class="btn btn-secondary btn-outline btn-wide"
            onClick={() => {
              navigate("/");
            }}
          >
            Fazer Login
          </button>
        </div>
      </form>
    </div>
  );
};
