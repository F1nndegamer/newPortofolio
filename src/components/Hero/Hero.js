import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  LeftSection,
  QuoteBanner,
  QuoteLabel,
  QuoteMeta,
  QuoteText,
} from "./HeroStyles";

const defaultQuote = {
  text: "Small, steady progress beats waiting for the perfect moment.",
  writer: "F1nn",
  year: "2026",
};

const parseQuoteLine = (line) => {
  const trimmedLine = line.trim();

  if (!trimmedLine) {
    return null;
  }

  if (trimmedLine.startsWith('"')) {
    let quoteText = "";
    let cursor = 1;

    while (cursor < trimmedLine.length) {
      const currentCharacter = trimmedLine[cursor];

      if (currentCharacter === '"' && trimmedLine[cursor + 1] === '"') {
        quoteText += '"';
        cursor += 2;
        continue;
      }

      if (currentCharacter === '"') {
        break;
      }

      quoteText += currentCharacter;
      cursor += 1;
    }

    if (trimmedLine[cursor] !== '"') {
      return null;
    }

    const remainder = trimmedLine.slice(cursor + 1).trim();

    if (!remainder.startsWith(",")) {
      return null;
    }

    const fields = remainder
      .slice(1)
      .split(",")
      .map((field) => field.trim());

    if (fields.length < 2) {
      return null;
    }

    const year = fields.pop();
    const writer = fields.join(",").trim();

    if (!quoteText.trim() || !writer || !year) {
      return null;
    }

    return { text: quoteText.trim(), writer, year };
  }

  const segments = trimmedLine.split(",");

  if (segments.length < 3) {
    return null;
  }

  const year = segments.pop().trim();
  const writer = segments.pop().trim();
  const text = segments.join(",").trim();

  if (!text || !writer || !year) {
    return null;
  }

  return { text, writer, year };
};

const Hero = () => {
  const [quote, setQuote] = useState(defaultQuote);

  useEffect(() => {
    let isMounted = true;

    const loadQuote = async () => {
      try {
        const response = await fetch("/quotes.txt");

        if (!response.ok) {
          return;
        }

        const fileText = await response.text();
        const lastLine = fileText
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean)
          .pop();

        const parsedQuote = lastLine ? parseQuoteLine(lastLine) : null;

        if (isMounted && parsedQuote) {
          setQuote(parsedQuote);
        }
      } catch (error) {
        return;
      }
    };

    loadQuote();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I’m F1nn! <br />
          Welcome to my Portfolio
        </SectionTitle>
        <SectionText>
          I'm a unity game developer who loves making games and working with
          code. This is where I share the stuff I’ve built. Projects,
          experiments, and more!.
        </SectionText>
        <QuoteBanner>
          <QuoteLabel>Quote of the fortnight</QuoteLabel>
          <QuoteText>“{quote.text}”</QuoteText>
          <QuoteMeta>
            {quote.writer}, {quote.year}
          </QuoteMeta>
        </QuoteBanner>
      </LeftSection>
    </Section>
  );
};

export default Hero;
