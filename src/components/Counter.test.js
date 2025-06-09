import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";


describe(Counter, () => {

    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countvalue = Number(getByTestId("count").textContent);
        expect(countvalue).toEqual(0);
    });

    it("counter displays increment to one", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementButton = getByRole("button", { name: "Plus" });

        const countvalue = Number(getByTestId("count").textContent);

        expect(countvalue).toEqual(0);

        fireEvent.click(incrementButton);
        const countvalue2 = Number(getByTestId("count").textContent);
        expect(countvalue2).toEqual(1);
    })
})