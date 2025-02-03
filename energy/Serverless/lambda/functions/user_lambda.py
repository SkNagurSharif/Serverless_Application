import json
import graphene
from energy.Serverless.graph.schema import Query, Mutation

def lambda_handler(event, context):
    # Get the GraphQL query from the event
    query = event.get('query')
    variables = event.get('variables')
    operation_name = event.get('operationName')

    # Execute the GraphQL query
    result = graphene.Schema(query=Query, mutation=Mutation).execute(query, variables=variables, operation_name=operation_name)

    # Return the result as a JSON response
    return {
        'statusCode': 200,
        'body': json.dumps(result.data),
        'headers': {
            'Content-Type': 'application/json'
        }
    }