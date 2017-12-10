
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHttpNotificationMethod } from './KalturaHttpNotificationMethod';
import { KalturaHttpNotificationAuthenticationMethod } from './KalturaHttpNotificationAuthenticationMethod';
import { KalturaHttpNotificationSslVersion } from './KalturaHttpNotificationSslVersion';
import { KalturaHttpNotificationCertificateType } from './KalturaHttpNotificationCertificateType';
import { KalturaHttpNotificationSslKeyType } from './KalturaHttpNotificationSslKeyType';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationDispatchJobData, KalturaEventNotificationDispatchJobDataArgs } from './KalturaEventNotificationDispatchJobData';

export interface KalturaHttpNotificationDispatchJobDataArgs  extends KalturaEventNotificationDispatchJobDataArgs {
    url? : string;
	method? : KalturaHttpNotificationMethod;
	data? : string;
	timeout? : number;
	connectTimeout? : number;
	username? : string;
	password? : string;
	authenticationMethod? : KalturaHttpNotificationAuthenticationMethod;
	sslVersion? : KalturaHttpNotificationSslVersion;
	sslCertificate? : string;
	sslCertificateType? : KalturaHttpNotificationCertificateType;
	sslCertificatePassword? : string;
	sslEngine? : string;
	sslEngineDefault? : string;
	sslKeyType? : KalturaHttpNotificationSslKeyType;
	sslKey? : string;
	sslKeyPassword? : string;
	customHeaders? : KalturaKeyValue[];
	signSecret? : string;
}


export class KalturaHttpNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {

    url : string;
	method : KalturaHttpNotificationMethod;
	data : string;
	timeout : number;
	connectTimeout : number;
	username : string;
	password : string;
	authenticationMethod : KalturaHttpNotificationAuthenticationMethod;
	sslVersion : KalturaHttpNotificationSslVersion;
	sslCertificate : string;
	sslCertificateType : KalturaHttpNotificationCertificateType;
	sslCertificatePassword : string;
	sslEngine : string;
	sslEngineDefault : string;
	sslKeyType : KalturaHttpNotificationSslKeyType;
	sslKey : string;
	sslKeyPassword : string;
	customHeaders : KalturaKeyValue[];
	signSecret : string;

    constructor(data? : KalturaHttpNotificationDispatchJobDataArgs)
    {
        super(data);
        if (typeof this.customHeaders === 'undefined') this.customHeaders = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationDispatchJobData' },
				url : { type : 's' },
				method : { type : 'en', subTypeConstructor : KalturaHttpNotificationMethod, subType : 'KalturaHttpNotificationMethod' },
				data : { type : 's' },
				timeout : { type : 'n' },
				connectTimeout : { type : 'n' },
				username : { type : 's' },
				password : { type : 's' },
				authenticationMethod : { type : 'en', subTypeConstructor : KalturaHttpNotificationAuthenticationMethod, subType : 'KalturaHttpNotificationAuthenticationMethod' },
				sslVersion : { type : 'en', subTypeConstructor : KalturaHttpNotificationSslVersion, subType : 'KalturaHttpNotificationSslVersion' },
				sslCertificate : { type : 's' },
				sslCertificateType : { type : 'es', subTypeConstructor : KalturaHttpNotificationCertificateType, subType : 'KalturaHttpNotificationCertificateType' },
				sslCertificatePassword : { type : 's' },
				sslEngine : { type : 's' },
				sslEngineDefault : { type : 's' },
				sslKeyType : { type : 'es', subTypeConstructor : KalturaHttpNotificationSslKeyType, subType : 'KalturaHttpNotificationSslKeyType' },
				sslKey : { type : 's' },
				sslKeyPassword : { type : 's' },
				customHeaders : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				signSecret : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationDispatchJobData',KalturaHttpNotificationDispatchJobData);
