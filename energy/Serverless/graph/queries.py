import graphene
from .models import UserType

class Query(graphene.ObjectType):
    hello = graphene.String()
    users = graphene.List(UserType)

    def resolve_hello(self, info):
        return 'Hello, world!'

    def resolve_users(self, info):
        # Return a list of users
        return [UserType(id=1, name='John Doe', email='john@example.com')]