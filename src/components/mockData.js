/* eslint-disable no-useless-escape */
export const mockData = [
  {
    success: true,
    query: `query NewsItem {
 newsItem(id: 2) {
   title
 }
}`,
    response: `{  
 "data": { 
   "newsItem": { 
     "title": "A Student's Guide to Startups" 
   } 
 }
}
`,
  },
  {
    success: false,
    query: `query NewsItem {
 newsItem(id: q) {
   hides
   hidden
   submitterId
   title
   upvoted
   upvotes
   text
 }
}
`,
    response: `{
 "errors": [
   {
     "message": "Field \\"feed\\" argument \\"type" of type "FeedType!" is required, but it was not provided.",
     "extensions": {
       "code": "GRAPHQL_VALIDATION_FAILED",
       "exception": {
         "stacktrace": [
           // eslint-disable-next-line no-useless-escape
           "GraphQLError: Field \\"feed\\" argument \"type\" of type \"FeedType!\" is required, but it was not provided.",
           "    at Object.leave (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.js:60:15)",
           "    at Object.leave (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/language/visitor.js:326:32)",
           "    at Object.leave (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/utilities/TypeInfo.js:411:21)",
           "    at visit (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/language/visitor.js:200:21)",
           "    at validate (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/validation/validate.js:91:24)",
           "    at validate (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/apollo-server-core/src/requestPipeline.ts:470:27)",
           "    at processGraphQLRequest (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/apollo-server-core/src/requestPipeline.ts:245:30)",
           "    at runMicrotasks (<anonymous>)",
           "    at processTicksAndRejections (node:internal/process/task_queues:96:5)",
           "    at async processHTTPRequest (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/apollo-server-core/src/runHttpQuery.ts:346:24)"
         ]
       }
     }
   }
 ]
}
`,
  },
  {
    success: true,
    query: `query Feed {
 feed (type: new){
   title
 }
}
`,
    response: `{
 "data": {
   "feed": []
 }
}
`,
  },
  {
    success: true,
    query: `query NewsItem {
 newsItem(id: 4) {
   title
   upvoted
   upvotes
   text
 }
}
`,
    response: `{
 "data": {
   "newsItem": {
     "title": "NYC Developer Dilemma",
     "upvoted": false,
     "upvotes": [
       "onebeerdave"
     ],
     "text": null
   }
 }
}
`,
  },
  {
    success: false,
    query: `query Query($userId: String!) {
 user(id: $userId) {
   hides
   firstName
 }
}
`,
    response: `{
 "errors": [
   {
     "message": "Variable \"$userId\" of non-null type \"String!\" must not be null.",
     "extensions": {
       "code": "BAD_USER_INPUT",
       "exception": {
         "stacktrace": [
           "GraphQLError: Variable \"$userId\" of non-null type \"String!\" must not be null.",
           "    at coerceVariableValues (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/execution/values.js:120:9)",
           "    at getVariableValues (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/execution/values.js:47:21)",
           "    at buildExecutionContext (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/execution/execute.js:280:63)",
           "    at execute (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/graphql/execution/execute.js:116:22)",
           "    at execute (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/apollo-server-core/src/requestPipeline.ts:497:34)",
           "    at processGraphQLRequest (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/apollo-server-core/src/requestPipeline.ts:387:28)",
           "    at runMicrotasks (<anonymous>)",
           "    at processTicksAndRejections (node:internal/process/task_queues:96:5)",
           "    at async processHTTPRequest (/Users/gwenphillips/Desktop/Codesmith/OSP/hackernews-react-graphql/node_modules/apollo-server-core/src/runHttpQuery.ts:346:24)"
         ]
       }
     }
   }
 ]
}
`,
  },
];
