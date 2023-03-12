import { Component, createSignal, JSX } from "solid-js";
import { useNavigate } from "@solidjs/router";

export const LoginForm: Component = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const onSubmit: JSX.EventHandlerUnion<
    HTMLFormElement,
    Event & { submitter: HTMLElement }
  > = (e) => {
    e.preventDefault();
    console.log(email(), password());
  };
  return (
    <div class="w-screen h-screen flex flex-col items-center justify-center bg-base-100">
      <form
        id="form-login"
        class="flex flex-col gap-4 max-w-3/5 items-center justify-center p-8 rounded-lg bg-neutral"
        onSubmit={onSubmit}
      >
        <h1 class="text-2xl font-bold text-center mx-auto w-fit">Bem vindo</h1>
        <div class="form-control">
          <label class="label" for="login_email">
            <span class="label-text">Seu e-mail</span>
          </label>
          <label class="input-group">
            <span>E-mail</span>
            <input
              value={email()}
              onchange={(e) => setEmail(e.currentTarget.value)}
              id="login_email"
              type="text"
              placeholder="seuemail@mail.com"
              class="input input-bordered"
              autocomplete="webauthn username"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label" for="login_password">
            <span class="label-text">Sua senha</span>
          </label>
          <label class="input-group">
            <span>Senha</span>
            <input
              value={password()}
              onchange={(e) => setPassword(e.currentTarget.value)}
              id="login_password"
              type="password"
              placeholder="**********"
              class="input input-bordered"
              autocomplete="webauthn current-password"
            />
          </label>
        </div>
        <div class="form-control flex flex-col gap-2 items-center mt-8">
          <button class="btn btn-primary btn-wide">Entrar</button>
          <p>Ou</p>
          <button
            type="button"
            class="btn btn-secondary btn-outline btn-wide"
            onClick={() => {
              navigate("/register");
            }}
          >
            Fazer cadastro
          </button>
        </div>
      </form>
    </div>
  );
};
