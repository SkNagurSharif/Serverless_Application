import graphene
from .models import UserType
import uuid  # Importing uuid to generate unique IDs

class CreateUser(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        email = graphene.String()

    user = graphene.Field(UserType)

    def mutate(self, info, name, email):
        # Create a new user with a unique ID
        user = UserType(id=str(uuid.uuid4()), name=name, email=email)  # Generate a unique ID
        return CreateUser(user=user)
