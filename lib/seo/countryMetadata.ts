import type { Metadata } from "next";

export function buildCountryMetadata(country: string): Metadata {
  return {
    title: `Move to ${country} from the US (2026 Guide) | Europe Relocator`,
    description: `Learn how to move to ${country} from the US. Compare visa options, requirements, costs, and application difficulty with Europe Relocator.`,
  };
}