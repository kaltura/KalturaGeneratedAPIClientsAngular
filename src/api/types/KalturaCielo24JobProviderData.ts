
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCielo24Priority } from './KalturaCielo24Priority';
import { KalturaCielo24Fidelity } from './KalturaCielo24Fidelity';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';

export interface KalturaCielo24JobProviderDataArgs  extends KalturaIntegrationJobProviderDataArgs {
    entryId? : string;
	flavorAssetId? : string;
	captionAssetFormats? : string;
	priority? : KalturaCielo24Priority;
	fidelity? : KalturaCielo24Fidelity;
	spokenLanguage? : KalturaLanguage;
	replaceMediaContent? : boolean;
	additionalParameters? : string;
}


export class KalturaCielo24JobProviderData extends KalturaIntegrationJobProviderData {

    entryId : string;
	flavorAssetId : string;
	captionAssetFormats : string;
	priority : KalturaCielo24Priority;
	fidelity : KalturaCielo24Fidelity;
	readonly username : string;
	readonly password : string;
	readonly baseUrl : string;
	spokenLanguage : KalturaLanguage;
	replaceMediaContent : boolean;
	additionalParameters : string;

    constructor(data? : KalturaCielo24JobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCielo24JobProviderData' },
				entryId : { type : 's' },
				flavorAssetId : { type : 's' },
				captionAssetFormats : { type : 's' },
				priority : { type : 'es', subTypeConstructor : KalturaCielo24Priority, subType : 'KalturaCielo24Priority' },
				fidelity : { type : 'es', subTypeConstructor : KalturaCielo24Fidelity, subType : 'KalturaCielo24Fidelity' },
				username : { type : 's', readOnly : true },
				password : { type : 's', readOnly : true },
				baseUrl : { type : 's', readOnly : true },
				spokenLanguage : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				replaceMediaContent : { type : 'b' },
				additionalParameters : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCielo24JobProviderData',KalturaCielo24JobProviderData);
