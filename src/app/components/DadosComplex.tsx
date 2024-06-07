'use client';
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

const DadosComplex = ({name, id, email, address}) => {
    return (
        <Card>
            <CardHeader>
                <p className="text-medium uppercase font-bold">{name}</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="text-tiny"><span>Id: </span>{id}</p>
                <p className="text-tiny"><span>E-mail: </span>{email}</p>
                <p className="text-tiny"><span>Cidade: </span>{address.city}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button size="sm">
                    Deletar
                </Button>
            </CardFooter>
        </Card>
    );
};

export default DadosComplex;

/*
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
}*/