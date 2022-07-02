export const backend_url: string = "http://localhost:8080"
import { BugOutlined, SearchOutlined, QuestionOutlined, BulbOutlined, ToolOutlined, StarOutlined } from "@ant-design/icons"
import { ForwardRefExoticComponent, ReactNode } from "react"

export const IssueTypes: {name: string, icon?: ForwardRefExoticComponent<any>}[] = [
    {
      icon: BugOutlined,
      name: "bug"
    },
    {
      icon: SearchOutlined,
      name: "observations"
    },
    {
      icon: QuestionOutlined,
      name: "question"
    },
    {
      icon: BulbOutlined,
      name: "suggestion"
    },
    {
      icon: ToolOutlined,
      name: "improvements"
    },
    {
      icon: StarOutlined,
      name: "New Features"
    }
  ]

export type IssueTypesType<T> = T extends infer IssueTypes ? IssueTypes : never

export const severity_levels: {
    name: string,
    icon?: ForwardRefExoticComponent<any>
}[] = [
    {
      name: "Low"
    },
    {
      name: "Medium"
    },
    {
      name: "High"
    },
    {
      name: "Critical"
    }
  ]

  export const general_statuses: {
    name: string,
    icon?: ForwardRefExoticComponent<any>
}[] = [
    {
      name: "New"
    },
    {
      name: "In Progress"
    },
    {
      name: "Fixed"
    },
    {
      name: "Not Fixed"
    },
    {
      name: "Closed"
    },
    {
      name: "Cancelled"
    },
    {
      name: "Released"
    },
]

export const global_tags: string[] = [
    "New",
    "Functionality",
    "Improvement",
    "Bug",
    "Issue",
    "Task",
    "Question",
    "Suggestion",
    "UI",
    "UX"
]