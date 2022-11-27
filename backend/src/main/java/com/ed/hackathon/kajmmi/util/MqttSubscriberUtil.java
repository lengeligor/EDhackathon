package com.ed.hackathon.kajmmi.util;

import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class MqttSubscriberUtil implements MqttCallback {

    /** The broker url. */
    private static final String brokerUrl = "tcp://broker.mqttdashboard.com";

    /** The client id. */
    private static final String clientId = "subscriberPicoMqttJ";

    /** The topic. */
    private static final String topic = "hackathon/kajmmi/rfid/pay";

    private final Logger logger = LoggerFactory.getLogger(MqttSubscriberUtil.class);

    public MqttSubscriberUtil() {
        subscribe(topic);
    }

    public void subscribe(String topic) {
        //	logger file name and pattern to log
        MemoryPersistence persistence = new MemoryPersistence();

        try
        {

            MqttClient sampleClient = new MqttClient(brokerUrl, clientId, persistence);
            MqttConnectOptions connOpts = new MqttConnectOptions();
            connOpts.setCleanSession(true);

            logger.debug("checking");
            logger.debug("Mqtt Connecting to broker: " + brokerUrl);

            sampleClient.connect(connOpts);
            logger.debug("Mqtt Connected");

            sampleClient.setCallback(this);
            sampleClient.subscribe(topic);

            logger.debug("Subscribed");
            logger.debug("Listening");

        } catch (MqttException me) {
            logger.error(me.getMessage());
        }
    }

    //Called when the client lost the connection to the broker
    public void connectionLost(Throwable arg0) {

    }

    //Called when a outgoing publish is complete
    public void deliveryComplete(IMqttDeliveryToken arg0) {

    }

    public void messageArrived(String topic, MqttMessage message) throws Exception {

        logger.debug("| Topic:" + topic);
        logger.debug("| Message: " +message.toString());
        logger.debug("-------------------------------------------------");

    }

}
