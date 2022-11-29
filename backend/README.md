Dokumentacia k backend

1. Rozbehanie docker imagov lokalne

    1. ELASTIC DOCKER IMAGE
   docker network create elastic
   docker pull docker.elastic.co/elasticsearch/elasticsearch:8.5.2
   docker run --name elasticsearch --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -t docker.elastic.co/elasticsearch/elasticsearch:8.5.2
    pri prvom spusteni to vygeneruje kluc ten si odlozit (https://www.elastic.co/guide/en/elasticsearch/reference/current/run-elasticsearch-locally.html)    

    2. KIBANA DOCKER IMAGE
   docker pull docker.elastic.co/kibana/kibana:8.5.2
   docker run --name kibana --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.5.2

    3. ACTIVEMQ DOCKER IMAGE
    otvorit cmd v priecinku backend/artemis
   docker run -it --rm -p 8161:8161 -p 61616:61616 vromero/activemq-artemis
   
Properties su nastavene na pripojenie kibana nie je zatial nakonfigurovana pre logovanie backendu.
