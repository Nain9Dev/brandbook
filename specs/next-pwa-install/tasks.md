# Tasks: Installable brandbook

One task at a time, test first. Update the `Session state` block in `spec.md` after closing each one.

- [x] **T01** `[A]` Write `tests/pwa-install.test.mjs`.
  - **Covers**: INS-006
  - **Done when**: the test fails on the current tree because the manifest, the icons and the tags are missing.
  - **Result**: failed with `ENOENT manifest.webmanifest` before the implementation.
- [x] **T02** `[A]` Render the install icons from the NainDev mark.
  - **Covers**: INS-003
  - **Done when**: the four PNG files exist in `icons/` at their declared sizes (command in `plan.md`).
  - **Result**: maskable mark ends at 36% of the width from the centre.
- [x] **T03** `[A]` Add `manifest.webmanifest` and the head tags in `index.html`.
  - **Covers**: INS-001, INS-002, INS-004, INS-005
  - **Done when**: `node --test` passes and Chrome reports no installability error on the root.
  - **Result**: 14 tests pass; `installabilityErrors` is empty.
- [ ] **T04** `[M]` Verify the live site after the deploy.
  - **Covers**: acceptance criteria
  - **Done when**: the live manifest answers 200 and the owner has installed the site on Android and iOS.
  - **Needs from owner**: merge the pull request, then install from Chrome on Android and Safari on iPhone.
