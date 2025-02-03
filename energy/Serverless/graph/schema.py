import graphene
from .models import UserType

class Query(graphene.ObjectType):
    hello = graphene.String()
    users = graphene.List(UserType)

class Mutation(graphene.ObjectType):
    create_user = graphene.Field(UserType, name=graphene.String(), email=graphene.String())