# BioTools

BioTools is a bioinformatics software project created by Aisha Evering.

It is designed around a simple idea:

> Bioinformatics is complicated enough. BioTools aims to keep the software
> around it simple, predictable, and understandable.

BioTools puts intuitive visual interfaces on top of bioinformatics software
researchers already use. The goal is to help users learn, understand, and
confidently use command-line tools rather than hide those tools behind an
opaque interface.

## Live Application

https://bio-tools.dev/

## GitHub

https://github.com/AishaEvering/BioTools

## Current Release

BioTools v1.0.0 was released in September 2026.

## Current Tool: SAM View Command Builder

The first BioTools utility is a visual command builder and decoder for
`samtools view`.

It allows users to work with SAM flags, filtering presets, and supported
`samtools view` options through a visual interface while showing the
corresponding command and explaining what the selected filters mean.

Users can:

- Visually select SAM flags
- Include or exclude flags
- Apply common filtering presets
- Configure supported `samtools view` options
- Generate a `samtools view` command
- Copy the generated command
- Decode SAM flag integers
- Decode partial command input
- Decode complete `samtools view` commands
- See plain-language explanations of the resulting filters

## Why Aisha Built BioTools

BioTools grew directly out of Aisha's graduate work in computational biology.

While learning to work with alignment files and `samtools`, she encountered
SAM bitwise flags. Values such as `99`, `147`, or combinations passed through
`-f` and `-F` are efficient for computers but are not naturally readable by
people.

Rather than repeatedly translating between numeric bitmasks and their
biological meanings, Aisha saw an opportunity to use her software engineering
background to make that relationship visible.

BioTools was built in response to a real bioinformatics workflow Aisha was
learning and using, rather than as a bioinformatics-themed software demo.

## Design Philosophy

BioTools is not intended to replace the command line.

Instead, the interface makes the command line visible.

Selections in the UI correspond to real SAM flags and `samtools` options, and
BioTools displays the resulting command so users can understand the
relationship between their intent and the command that implements it.

The broader philosophy of the project is:

> Build bioinformatics workflows the way researchers think, not the way
> command-line tools are implemented.

## Beautifully Boring

One of the informal design principles behind BioTools is to be “beautifully boring.”

Bioinformatics software already asks users to reason about complicated scientific data, unfamiliar command-line tools, flags, file formats, and workflows. The interface around those tasks should not introduce additional surprises.

In BioTools, “beautifully boring” means predictable behavior, clear feedback, understandable controls, and an interface that gets out of the way. The visual design can be polished, but the interaction model should feel unsurprising.

## SAM Flags

The SAM View Command Builder supports standard SAM bitwise flags including:

- Read Paired
- Proper Pair
- Read Unmapped
- Mate Unmapped
- Read Reverse Strand
- Mate Reverse Strand
- First in Pair
- Second in Pair
- Secondary Alignment
- QC Fail
- Duplicate
- Supplementary Alignment

BioTools translates combinations of these selections into the appropriate
numeric bitmasks used by `samtools view`.

## Presets

BioTools includes presets for common filtering intentions, including:

- Properly Paired Reads
- Primary Alignments
- Mapped Reads
- Forward Strand Alignments
- First in Pair
- Second in Pair
- Non-Duplicate Reads

Presets expose the underlying flags rather than concealing how the command is
constructed.

## Command Decoder

BioTools also works in the opposite direction.

Instead of only building commands from visual selections, users can provide
existing SAM flag values, options, or `samtools view` commands and ask
BioTools to decode them.

For example:

    samtools view -f 2 -F 260 -q 20 sample.bam

The decoder identifies recognized include flags, exclude flags, options, and
other command components and presents the result in a more understandable
form.

This makes the decoder useful both for constructing new commands and for
understanding commands users encounter elsewhere.

## Engineering

BioTools is a React and TypeScript application built with Vite.

The application uses typed domain models to represent concepts such as SAM
flags, view options, presets, decoded input, and user-facing explanations.

The decoder includes input classification and tokenization so that BioTools
can distinguish between different forms of input and route them through the
appropriate decoding logic.

The project also includes automated tests and continuous integration through
GitHub Actions.

BioTools is deployed as a production web application at bio-tools.dev.

## Engineering Approach

A major design goal is predictability.

Changes to visual selections should produce understandable changes to the
generated command. Resetting, selecting presets, opening or closing the
decoder, and modifying decoder input are designed to avoid stale state and
misleading results.

Validation and feedback are also treated as part of the product rather than
as afterthoughts. Invalid or unrecognized input should be communicated to the
user instead of silently producing an incorrect interpretation.

## What BioTools Represents in Aisha's Portfolio

BioTools sits directly at the intersection of Aisha's software engineering
background and her graduate training in computational biology.

The project demonstrates her ability to encounter a domain-specific problem,
understand the underlying technical model, design a more approachable
abstraction, implement it as production software, test it, and ship it for
others to use.

BioTools is an actively developed project rather than a completed classroom
assignment.

## Future Direction

The SAM View Command Builder is the first BioTools utility.

The broader BioTools concept can expand to additional bioinformatics tools
and workflows while maintaining the same principles:

- Preserve the underlying scientific and computational concepts
- Make complicated software easier to reason about
- Prefer predictable interfaces
- Help users understand generated commands rather than hiding them
- Build around the way researchers think about their work
