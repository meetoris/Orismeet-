import { CancellationReasonRequirement } from "@calcom/prisma/enums";
import { describe, expect, it } from "vitest";
import { isCancellationReasonRequired } from "./cancellationReason";

describe("isCancellationReasonRequired", () => {
  describe("MANDATORY_BOTH", () => {
    it("requires a reason from the host", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.MANDATORY_BOTH, true)).toBe(true);
    });

    it("requires a reason from the attendee", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.MANDATORY_BOTH, false)).toBe(true);
    });
  });

  describe("MANDATORY_HOST_ONLY", () => {
    it("requires a reason from the host", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.MANDATORY_HOST_ONLY, true)).toBe(
        true
      );
    });

    it("does not require a reason from the attendee", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.MANDATORY_HOST_ONLY, false)).toBe(
        false
      );
    });
  });

  describe("MANDATORY_ATTENDEE_ONLY", () => {
    it("requires a reason from the attendee", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.MANDATORY_ATTENDEE_ONLY, false)).toBe(
        true
      );
    });

    it("does not require a reason from the host", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.MANDATORY_ATTENDEE_ONLY, true)).toBe(
        false
      );
    });
  });

  describe("OPTIONAL_BOTH", () => {
    it("does not require a reason from the host", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.OPTIONAL_BOTH, true)).toBe(false);
    });

    it("does not require a reason from the attendee", () => {
      expect(isCancellationReasonRequired(CancellationReasonRequirement.OPTIONAL_BOTH, false)).toBe(false);
    });
  });

  describe("default behavior (MANDATORY_HOST_ONLY)", () => {
    it("treats null as MANDATORY_HOST_ONLY and requires a reason from the host", () => {
      expect(isCancellationReasonRequired(null, true)).toBe(true);
    });

    it("treats null as MANDATORY_HOST_ONLY and exempts the attendee", () => {
      expect(isCancellationReasonRequired(null, false)).toBe(false);
    });

    it("treats undefined as MANDATORY_HOST_ONLY and requires a reason from the host", () => {
      expect(isCancellationReasonRequired(undefined, true)).toBe(true);
    });

    it("treats undefined as MANDATORY_HOST_ONLY and exempts the attendee", () => {
      expect(isCancellationReasonRequired(undefined, false)).toBe(false);
    });
  });

  it("returns false for an unrecognized requirement value", () => {
    // Guards the switch's fallback branch against future enum/data drift.
    const unknownRequirement = "SOME_UNKNOWN_VALUE" as CancellationReasonRequirement;
    expect(isCancellationReasonRequired(unknownRequirement, true)).toBe(false);
    expect(isCancellationReasonRequired(unknownRequirement, false)).toBe(false);
  });
});
