import * as React from "react";
import { Button } from "../../shared/components/atoms/buttons/Button";
import { Checkbox } from "../../shared/components/atoms/Checkbox/Checkbox";
import { Input } from "../../shared/components/atoms/inputs/Input";

export default function Login() {
  const [form, setForm] = React.useState({ name: "", password: "" });
  const [remember, setRemember] = React.useState(true);
  const [errors, setErrors] = React.useState<{
    name?: string;
    password?: string;
  }>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!form.name) next.name = "아이디를 입력하지 않았습니다.";
    if (!form.password) next.password = "비밀번호를 입력하지 않았습니다.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // TODO: handle actual login
    console.log({ ...form, remember });
  };

  return (
    <div className="min-h-screen w-full bg-[var(--main-bg)]">
      <div className="mx-auto flex max-w-2xl items-center justify-center px-3 py-12">
        <div className="w-full rounded-2xl bg-white p-12 py-36 xs:py-24 sm:py-16 sm:pb-36 shadow-sm ring-1 ring-black/5">
          <h3 className="mb-10 text-center text-4xl font-extrabold tracking-wide text-[var(--brand)]">
            LANDAS
          </h3>

          <form
            onSubmit={onSubmit}
            className="mx-auto sm:mt-12  max-w-md space-y-5"
          >
            <Input
              label="아이디"
              name="name"
              placeholder="아이디를 입력해주세요."
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              error={errors.name}
            />

            <div className="space-y-1">
              <Input
                label="비밀번호"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                value={form.password}
                onChange={(e) =>
                  setForm((s) => ({ ...s, password: e.target.value }))
                }
                error={errors.password}
                hint="8~16자, 대/소문자+숫자+특수문자 조합"
              />
            </div>

            <div className="flex items-center justify-between pt-1 flex-wrap">
              <Checkbox
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.currentTarget.checked)}
                label="아이디 저장"
              />
              <div className="text-sm text-[var(--text)]">
                <a href="#" className="hover:underline">
                  아이디찾기
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:underline">
                  비밀번호 찾기
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" fullWidth size="lg">
                로그인
              </Button>
            </div>

            <Button variant="muted" fullWidth size="lg" className="bg-white">
             회원가입
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
