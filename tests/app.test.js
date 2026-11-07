import validateID, {isValidDate, checksum} from "../scripts/app.js";
import { describe, test, it, expect } from "vitest";

// validateID tests
describe("validateID", () => {
    it('should validate that the id number used is true', () => {
        expect(validateID("8001015009087")).toBe(true);
    });

    it('should validate that the id number is false', () => {
        expect(validateID("9003155009083")).toBe(false);
    });

    it("should validate that the id number with leap year is true", () => {
        expect(validateID("0002295009084")).toBe(true);
    })

    it("should validate that the id number with invalid leap year is false", () => {
        expect(validateID("0102295009082")).toBe(false);
    })

    it("ID string containing letters should return false", () => {
        expect(validateID("0102295x09082")).toBe(false);
    });

    it("ID string containing empty should return false", () => {
        expect(validateID("0102295 09082")).toBe(false);
    });

    it("ID strings that do not have a length of  13 should return false", () => {
        expect(validateID("000229500908456")).toBe(false);
    });
});

// checksum tests
describe("checksum", () => {
    it("should return true for the checksum", () => {
        expect(checksum("9003155009082")).toBe(true);
    });

    it("should return false for the checksum", () => {
        expect(checksum("9003155009083")).toBe(false);
    });
});

// isValidDate tests
describe("isValidDate", () => {
    it('february can only have 28 or 29 days', () => {
        expect(isValidDate(2026, 2, 30)).toBe(false);
    });

    it('zeroth month should return false', () => {
        expect(isValidDate(2025, 1, 0)).toBe(false);
    });

    it("month numbers higher than 12 should return false", () => {
        expect(isValidDate(2020, 15, 20)).toBe(false);
    });

    it("day zero should return false", () => {
        expect(isValidDate(2025, 10, 0)).toBe(false);
    });
});
