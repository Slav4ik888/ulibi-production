import { Profile, ValidateProfileError } from '../../../types'

interface MockItem {
  description : string
  data        : Profile
}

type MockResult = ValidateProfileError[]


interface Mock extends Array<MockItem | MockResult> {
  0: MockItem
  1: MockResult
}

export type Mocks = Mock[]
