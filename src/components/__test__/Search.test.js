import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom";
import MOCK_REST_LIST from "../__test__/mocks/MOCK_RESTR_LIST.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_REST_LIST);
        }
    })
})
it("should render Body component with search btton", async () => {
    await act(async () =>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        );
    });
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value : "pizza"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
})