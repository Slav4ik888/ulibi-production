// Page URL, scroll position in px
export type ScrollRestoreSchema = Record<string, number>

export interface StateSchemaScrollRestore {
  scroll: ScrollRestoreSchema
}
