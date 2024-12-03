import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Alert } from 'react-native';


const DropdownRondasLogic = ({ apiUrl, userId, onQRCodeScan }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Função para buscar rondas da API
  const fetchRondas = async () => {
    try {
      setIsLoading(true);

      // Simulação da API com payload fornecido
      const json = [
        {
          idRonda: 1,
          horarioInicio: "13:00",
          horarioFim: "",
          data: "2024-11-27",
          observacao: "",
          idUsuario: 1,
          idRota: 1,
          nomeLocal: "Sala 101",
          status: "pendente", // Status inicial
        },
        {
          idRonda: 2,
          horarioInicio: "14:30",
          horarioFim: "",
          data: "2024-11-27",
          observacao: "",
          idUsuario: 1,
          idRota: 2,
          nomeLocal: "Sala 102",
          status: "pendente",
        },
      ];

      // Formatação dos dados para o Dropdown
      const formattedData = json.map(item => ({
      }));

      setData(formattedData);
    } catch (error) {
      console.error('Erro ao buscar rondas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRondas();
  }, []);

  // Atualiza o status da ronda após o escaneamento do QR Code
  const handleQRCodeScan = idRonda => {
    const updatedData = data.map(item =>
      item.value === idRonda ? { ...item, status: 'concluído' } : item
    );

    setData(updatedData); // Atualiza o estado local
    Alert.alert('Ronda Concluída!', 'Você completou a ronda com sucesso.');
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

 
};

export default DropdownRondasLogic;
