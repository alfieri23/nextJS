import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

export default function DadosComplex() {
    return (
        <Card>
            <CardHeader>
                <p className="text-medium uppercase font-bold">Exemplo</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="text-tiny">Exemplo de conteúdo</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button size="sm">
                    Deletar
                </Button>
            </CardFooter>
        </Card>
    )
}