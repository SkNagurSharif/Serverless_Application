import graphene

class UserType(graphene.ObjectType):
    id = graphene.ID()
    name = graphene.String()
    email = graphene.String()