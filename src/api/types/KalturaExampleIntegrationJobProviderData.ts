
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';

export interface KalturaExampleIntegrationJobProviderDataArgs  extends KalturaIntegrationJobProviderDataArgs {
    exampleUrl? : string;
}


export class KalturaExampleIntegrationJobProviderData extends KalturaIntegrationJobProviderData {

    exampleUrl : string;

    constructor(data? : KalturaExampleIntegrationJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExampleIntegrationJobProviderData' },
				exampleUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExampleIntegrationJobProviderData',KalturaExampleIntegrationJobProviderData);
