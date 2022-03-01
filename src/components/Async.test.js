import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("비동기 컴포넌트", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn(); // 내장 fetch 함수를 mock 함수로 덮어 쓰기
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "첫 포스트!" }], // fetch를하면 json이 반환되고 then을 해서 date를 받기 때문에 동일한 시나리오로 작성
    }); // fetch가 호출될 때 resolved 되면 지정한 값을 반환

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    // 한 개 이상의 item을 가져오니까 findAllByRole 사용
    // find는 원하는 원소가 없더라도 비동기적으로 기다리게 된다.
    expect(listItemElements).not.toHaveLength(0); //성공하면 빈 배열을 가져오지 않으니까 not.toHaveLength(0)를 통해서 빈 배열이 아닌지 test
  });
});
