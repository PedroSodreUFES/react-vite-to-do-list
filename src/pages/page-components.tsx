import Badge from "../components/Badge";
import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import Card from "../components/Card";
import Container from "../components/Container";
import Icon from "../components/Icon";
import InputCheckbox from "../components/InputCheckbox";
import InputText from "../components/InputText";
import Skeleton from "../components/Skeleton";
import Text from "../components/Text";
import XIcon from "../assets/icons/X-Regular.svg?react"

export default function PageComponents() {
    return (
        <Container>
            <div className="grid gap-3">
                <div className="flex flex-col gap-2">
                    <Text variant="body-md" className="">
                        Olá mundo
                    </Text>
                    <Text variant="body-md-bold" className="bg-green-base">
                        Olá mundo
                    </Text>
                    <Text variant="body-sm-bold">
                        Olá mundo
                    </Text>
                </div>

                <div className="flex gap-1">
                    <Icon svg={XIcon} animate className="text-pink-base" />
                </div>

                <div className="flex space-x-2 items-center">
                    <Badge variant={"secondary"}>5</Badge>
                    <Badge variant={"primary"}>2 de 5</Badge>
                    <Badge loading variant={"primary"}>2 de 5</Badge>
                </div>

                <div>
                    <Button icon={XIcon}>
                        SODRAS ONLINE
                    </Button>
                </div>

                <div className="flex gap-1">
                    <ButtonIcon icon={XIcon} variant={"primary"} />
                    <ButtonIcon icon={XIcon} variant={"secondary"} />
                    <ButtonIcon icon={XIcon} variant={"tertiary"} />
                    <ButtonIcon icon={XIcon} loading variant={"none"} />
                    <ButtonIcon icon={XIcon} loading handling />
                </div>

                <div>
                    <InputText />
                </div>

                <div>
                    <InputCheckbox />
                    <InputCheckbox loading />
                </div>

                <div>
                    <Card size={"md"}>Olá sodras</Card>
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="w-96 h-6" />
                </div>
            </div>
        </Container>
    )
}