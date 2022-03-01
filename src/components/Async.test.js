import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("비동기 컴포넌트", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    // 한 개 이상의 item을 가져오니까 findAllByRole 사용
    // find는 원하는 원소가 없더라도 비동기적으로 기다리게 된다.
    expect(listItemElements).not.toHaveLength(0); //성공하면 빈 배열을 가져오지 않으니까 not.toHaveLength(0)를 통해서 빈 배열이 아닌지 test
  });
});
